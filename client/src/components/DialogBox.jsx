import { X } from 'lucide-react';
import { useRef } from 'react';
const DialogBox = () => {
    const dialogRef = useRef();
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[320px] max-w-md p-6 flex flex-col items-center text-center backdrop-blur-2xl bg-white/30 z-50 border border-white/40 rounded-2xl shadow-lg" ref={dialogRef}>
        <span className='absolute right-2 top-2 cursor-pointer'
            onClick={()=>{
                if(dialogRef.current){
                    dialogRef.current.style.display = 'none'
                }
            }}
        >
            <X />
        </span>
      <h1 className="font-bold text-red-500 text-2xl">Notice</h1>
      <p className="mt-4 text-gray-800 font-medium text-sm">
        This project requires every team member to bring their own laptop,
        since each process runs independently on a separate device.
      </p>
    </div>
  );
};

export default DialogBox;
