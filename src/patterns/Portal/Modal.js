export function Modal({ onClose, max }) {
  const randomNumber = Math.floor(Math.random() * (max + 1));

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Ваше число: {randomNumber}</h1>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
