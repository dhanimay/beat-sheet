
import { FC, useCallback, useEffect, useState, MouseEvent } from 'react';
import { createSheetRequest, deleteSheetRequest, getSheetsRequest } from 'services/sheet-service';

export const Sheets: FC = () => {
  const [sheets, setSheets] = useState<Array<{ actCount: number; id: string; title: string }>>([]);
  async function fetchSheets() {
    const data = await getSheetsRequest();
    if (data) {
      setSheets(data);
    }
  }
  useEffect(() => {
    fetchSheets();
  }, []);

  const createSheet = useCallback(async () => {
    const data = await createSheetRequest('My New Beat Sheet');
    window.location.assign(window.location.origin + '/' + data.id)
  }, []);

  const deleteSheet = useCallback(async (sheetId: string) => {
    await deleteSheetRequest(sheetId);
    fetchSheets();
  }, []);

  const toSheet = useCallback(async (event: MouseEvent, sheetId: string) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('sheet-delete')) {
      return;
    }
    window.location.assign(window.location.origin + '/' + sheetId)
  }, []);

  const liClass = 'flex flex-col place-content-center border-2 border-white rounded w-[200px] h-[200px]' +
    ' hover:border-bs-gold cursor-pointer bg-bs-black hover:brightness-[1.1] transition-all';

  return (
    <div className='py-8'>
      <h1 className='text-8xl break-all'>
        <span className='text-stroke'>Sheets</span>
        <sub className='text-2xl whitespace-nowrap relative -top-[50px]'>sp<img className='w-[15px] inline' src='/spotter-icon.png' />tter</sub>
      </h1>
      <hr className='w-[50%] mx-auto border-bs-gold' />
      <div className='mx-auto w-full h-full max-w-[800px] py-8'>
        <ul className='flex gap-8 px-4 flex-wrap justify-center'>
          {!!sheets.length && sheets.map((sheet, i) => (
            <li key={i} onClick={(e) => toSheet(e, sheet.id)} className={liClass + ' text-3xl font-bold relative sheet-hover'}>
              <div className={'absolute -top-2 -right-2 w-[25px] h-[25px] p-1 bg-red-800 rounded-full' +
                ' flex justify-center items-center text-lg sheet-delete opacity-0 transition-all duration-[300ms] z-50'}
                onClick={() => deleteSheet(sheet.id)}
              >
                <span className='sheet-delete'>X</span>
              </div>
              <div className='flex-1 flex flex-col justify-center'>
                <p>{sheet.title}</p>
              </div>
              <div className='flex flex-col justify-end pb-1'>
                <p>🎬 - {sheet.actCount}</p>
              </div>
            </li>))}
          {!sheets.length && <li className='block mb-12'>
            <p className='text-[#d1ccbd]'>You don't have any sheets yet. </p>
          </li>}
          <li key={'add'} className={liClass}
            onClick={createSheet}
          >
            <span className='text-stroke !text-bs-gold text-2xl'>+</span>
          </li>
        </ul>
      </div>
    </div>
  )
}