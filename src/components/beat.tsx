import { FC, useCallback, useRef } from 'react';
import { IBeat } from 'models';
import { DeleteBeat } from './delete-beat';
import { CameraAngles } from 'utils';

interface BeatProps {
  beat: IBeat;
  onDelete: (beatId: string) => void;
  onUpdateDescription: (beatId: string, description: string) => void;
  onUpdateDuration: (beatId: string, duration: number) => void;
  onUpdateCameraAngle: (beatId: string, cameraAngle: string) => void;
}

export const Beat: FC<BeatProps> = ({ beat: { id, duration, description, cameraAngle },
  onDelete,
  onUpdateDescription,
  onUpdateCameraAngle,
  onUpdateDuration,
}) => {
  const inputRef = useRef<HTMLDivElement>(null);

  const onDescriptionBlur = useCallback((target: HTMLDivElement) => {
    onUpdateDescription(id, target.innerHTML.trim());
  }, []);

  const onDurationChange = useCallback((target: HTMLInputElement) => {
    onUpdateDuration(id, Number(target.value))
  }, []);

  const onCameraAngleChange = useCallback((target: HTMLSelectElement) => {
    onUpdateCameraAngle(id, target.value)
  }, []);

  return (
    <div className='w-full px-4 flex place-content-start flex-col md:flex-row border-[1px] border-white py-2 rounded md:py-0 md:border-0'>
      <div className='flex flex-1 mb-4 md:mb-0 '>
        <DeleteBeat onClick={() => onDelete(id)} />
        <div className='mr-2 inline-block'>
          <span className='inline-block w-[10px] h-[10px] bg-bs-gold rounded-full'></span>
        </div>
        <div className='relative'>
          <div
            className='block transition-all relative'
            ref={inputRef}
            contentEditable
            suppressContentEditableWarning={true}
            onFocus={({ target }) => {
              if (inputRef.current) {
                target.style.padding = '8px';
              }
            }}
            onBlur={({ target }) => {
              if (inputRef.current) {
                target.style.padding = '';
              }
              onDescriptionBlur(target);
            }}
          >
            {description}
          </div>
        </div>
      </div>
      <div className='w-[300px] text-white text-center flex'>
        <div className='w-[90px] h-[20px] flex mr-4'>
          ⏳
          <input type='number' className='bg-bs-black px-1 w-full border-b-2 border-bs-gray remove-arrow'
            defaultValue={duration}
            onBlur={({ target }) => onDurationChange(target)}
          />
        </div>
        <div className='flex-1 max-w-[250px] min-w-[150px] h-[20px] flex'>
          📽️
          <select className='w-full bg-bs-black border-b-2 border-bs-gray'
            defaultValue={cameraAngle}
            onChange={({ target }) => onCameraAngleChange(target)}
          >
            {CameraAngles.map((angle, i) => (
              <option key={i} value={angle.value}>
                {angle.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div >
  )
}