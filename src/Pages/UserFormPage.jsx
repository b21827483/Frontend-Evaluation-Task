import UserForm from "../components/UserForm/UserForm"
import Modal from "../components/Shared/UI/Modal"

function UserFormPage(props) {
    return (
        <Modal onHideForm={props.onHideForm}>
            <UserForm />
        </Modal>)
}

export default UserFormPage