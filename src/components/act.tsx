import { FC, FocusEventHandler, useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import { Beat } from './beat';
import { IAct } from 'models';
import { DeleteAct } from './delete-act';
import { AddBeat } from './add-beat';
import { addBeatRequest, deleteBeatRequest, updateBeatCameraAngleRequest, updateBeatDescriptionRequest, updateBeatDurationRequest } from 'services/sheet-service';
import { CameraAngles } from 'utils';

interface ActProps {
  act: IAct;
  order: number;
  onDelete: (actId: string) => void;
  onUpdate: (actId: string, description: string) => void;
  triggerFetch: () => void;
  onDeleteBeat: (actId: string, beatId: string) => void;
}

export const Act: FC<ActProps> = ({ act, order, onDelete, onUpdate, triggerFetch, onDeleteBeat }) => {
  const { description, beats, id } = act;
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setAnimate(true), 200) }, []);

  const addBeat = useCallback(async () => {
    const description = 'New Beat Description';
    await addBeatRequest(id, description, 0, CameraAngles[0].value);
    triggerFetch();
  }, [act]);

  const updateBeatDescription = useCallback(async (beatId: string, description: string) => {
    await updateBeatDescriptionRequest(id, beatId, description);
  }, []);

  const updateBeatDuration = useCallback(async (beatId: string, duration: number) => {
    await updateBeatDurationRequest(id, beatId, duration);
    triggerFetch();
  }, []);

  const updateBeatCameraAngle = useCallback(async (beatId: string, cameraAngle: string) => {
    await updateBeatCameraAngleRequest(id, beatId, cameraAngle);
  }, []);

  const deleteBeat = useCallback(async (beatId: string) => {
    await deleteBeatRequest(beatId);
    onDeleteBeat(id, beatId);
  }, []);

  const onInputBlur: FocusEventHandler = useCallback((event) => {
    const target = event.target as HTMLDivElement;
    onUpdate(id, target.innerHTML.trim());
  }, []);

  const containerClass = cx({
    'flex place-items-center relative transition-all duration-500 bg-no-repeat bg-center bg-cover text-left mx-auto rounded-lg border-[1px] border-white p-4 py-8': true,
    'w-0 opacity-0': !animate,
    'max-w-[1000px] w-full opacity-1': animate
  });

  return (
    <div className={containerClass}>
      <span className='absolute -top-3 left-4 px-2 bg-bs-black'>Act {order}</span>
      <div className='flex flex-col flex-1'>
        <div className='relative border-[#bba4a4] border-b-2'>
          <div
            className='float-left relative px-8 pt-2 focus:outline-none focus:bg-bs-gray'
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={onInputBlur}
          >{description}</div>
        </div>
        <ul className='text-white flex flex-col items-start pb-4'>
          {beats?.map((beat, i) => (
            <li key={i} className='pt-2 flex justify-start w-full'>
              <Beat beat={beat} onDelete={deleteBeat}
                onUpdateDescription={updateBeatDescription}
                onUpdateDuration={updateBeatDuration}
                onUpdateCameraAngle={updateBeatCameraAngle}
              />
            </li>)
          )}
        </ul>
        <AddBeat onClick={addBeat} />
      </div>
      <DeleteAct onClick={() => onDelete(id)} />
    </div>
  )
}