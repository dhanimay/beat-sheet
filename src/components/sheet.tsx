import { FC, FocusEventHandler, useCallback, useEffect, useState } from 'react';
import { Act } from './act';
import { SheetHeader } from './sheet-header';
import { AddAct } from './add-act';
import { IBeatSheet, } from 'models';
import { getTotalDuration } from 'utils';
import { getSheetRequest, addActRequest, updateActRequest, deleteActRequest, updateSheetRequest } from 'services/sheet-service';

export const Sheet: FC = () => {
  const { pathname, origin } = window.location;
  const sheetId = pathname.split('/').filter(Boolean)?.at(0);
  const [beatSheet, setBeatSheet] = useState<IBeatSheet | null>(null);

  const fetchSheet = useCallback(async function fetch() {
    const data = await getSheetRequest(String(sheetId));
    if (data) {
      setBeatSheet(data);
    } else {
      location.assign(origin);
    }
  }, []);

  useEffect(() => {
    fetchSheet();
  }, []);

  const onDescriptionBlur: FocusEventHandler = useCallback(async (event) => {
    const target = event.target as HTMLDivElement;
    await updateSheetRequest(String(sheetId), target.innerHTML.trim());
  }, []);

  const addAct = useCallback(async () => {
    const description = `Act ${(beatSheet?.acts.length || 0) + 1} Title`;
    await addActRequest(String(sheetId), description);
    fetchSheet();
  }, [beatSheet]);

  const updateAct = useCallback(async (actId: string, description: string) => {
    await updateActRequest(actId, description);
  }, []);

  const deleteAct = useCallback(async (actId: string) => {
    await deleteActRequest(actId);
    setBeatSheet((sheet) => {
      if (sheet) {
        const acts = sheet.acts.filter((act) => act.id !== actId);
        return ({ ...sheet, acts })
      }
      return null;
    })
  }, []);

  const deleteBeat = useCallback(async (actId: string, beatId: string) => {
    setBeatSheet((sheet) => {
      if (sheet) {
        const actIndex = sheet.acts.findIndex((act) => act.id === actId);
        const beats = sheet.acts[actIndex].beats.filter((beat) => beat.id !== beatId);
        sheet.acts[actIndex].beats = beats;
        return { ...sheet }
      }
      return null;
    })
  }, []);

  return (
    <div className='h-full w-full p-4 flex flex-col max-w-bs-max mx-auto'>
      <div
        className='text-4xl inline-block mx-auto px-8 pt-2 focus:outline-none focus:bg-bs-gray'
        contentEditable
        suppressContentEditableWarning={true}
        onBlur={onDescriptionBlur}
      >{beatSheet?.title}</div>
      <div className='md:border-[1px] border-bs-gray flex-1 flex flex-col rounded'>
        <SheetHeader actCount={(beatSheet?.acts?.length || 0)} duration={getTotalDuration(beatSheet?.acts)} />
        <div className='flex-1 relative'>
          <div className='w-full h-full flex flex-col absolute overflow-scroll'>
            <ul>
              {
                beatSheet?.acts?.map((act, i) => (
                  <li key={i} className='my-4'>
                    <Act act={act} order={i + 1}
                      onDelete={deleteAct}
                      onUpdate={updateAct}
                      triggerFetch={() => fetchSheet()}
                      onDeleteBeat={deleteBeat}
                    />
                  </li>
                ))
              }
            </ul>
            <AddAct className="mb-[100px]" onClick={addAct} />
          </div>
        </div>
      </div>
    </div >
  )
}