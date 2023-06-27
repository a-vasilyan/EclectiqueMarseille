import mm from "../style/modalContact.module.css";

export default function ModalContact({children, visible, setVisible}){
    const conactModal = [mm.contactModal]

    if(visible){
        conactModal.push(mm.active);
    }

    return(
        <div className={conactModal.join(" ")}
        onClick={() => setVisible(false)}>
            <div className={mm.modalContent}onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}