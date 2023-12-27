import { useEffect, useState } from "react";

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Modalı aç</button>
      {isOpen && (
        <Modal>
          <h1 className="pb-2 text-lg font-bold">Modal açık</h1>
          <button onClick={closeModal}>Kapalı</button>
        </Modal>
      )}
    </>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">{children}</div>
    </div>
  );
}
