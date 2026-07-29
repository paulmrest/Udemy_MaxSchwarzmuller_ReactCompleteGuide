import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";

import Button from './Button.jsx';

export default function Modal({ ref, children, dismissModalButtonText, onDismissModal, confirmModalButtonText, onConfirmModal }) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
      close() {
        dialogRef.current.close();
      }
    }
  })

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <menu className="flex items-center justify-between gap-2 my-2">
        {dismissModalButtonText && dismissModalButtonText.trim() !== '' && onDismissModal && 
          <Button onClick={onDismissModal}>{dismissModalButtonText}</Button>}
        {confirmModalButtonText && confirmModalButtonText.trim() !== '' && onConfirmModal && 
          <Button onClick={onConfirmModal}>{confirmModalButtonText}</Button>}
      </menu>
    </dialog>,
    document.getElementById('modal-root')
  );
}
