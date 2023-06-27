import modal from "../style/modalAbout.module.css";

export default function ModalAbout({children, visible, setVisible}){
    const aboutModal = [modal.aboutModal]

    if(visible){
        aboutModal.push(modal.active);
    }

    return(
        <div className={aboutModal.join(" ")}
        onClick={() => setVisible(false)}>
            <div className={modal.modalContent}
                onClick={(e) => e.stopPropagation()}
            >{children}</div>
        </div>
    )
}