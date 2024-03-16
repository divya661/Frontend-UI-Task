import "./modal.css";

const Modal = ({ children, show, onClose, title }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose} />
        <div className="modal-wrapper title-bold-typograpy">
          <div className="modal-content">
            <div className="modal-body">
              <div onClick={onClose} className="modal-close">
                X
              </div>

              {children}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;
