import React, {useState} from 'react';
import Loading from "../common/Loading";

const NewTicketInput = ({newTicketCallback}) => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmitForm = async (event) => {
        setIsSubmitting(true)
        event.preventDefault()
        const {
            name,
            email,
            description
        } = event.target
        try {
            const res = await fetch('/api/ticket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    description: description.value
                }),
            })
            if (res.status === 201) {
                const data = await res.json();
                newTicketCallback(data.result);
                event.target.reset()
            }
        } catch (error) {
            console.error(error)
            alert("Something went wrong. Please try again later")
        }
        setIsSubmitting(false)
    }


    return (
        <div className="card">
            <div className="card-header">
                Create a new ticket
            </div>
            <div className="card-body">
                <Loading isLoading={isSubmitting}>
                    <form onSubmit={handleSubmitForm}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInputName"
                                    name="name"
                                    required
                                    maxLength={15}
                                />
                                <label htmlFor="floatingInputName">Name (max-length 15)</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInputName"
                                    name="email"
                                    required
                                />
                                <label htmlFor="floatingInputEmail">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    name="description"
                                    className="form-control"
                                    id="floatingInputDescription"
                                    maxLength={50}
                                    required
                                />
                                <label htmlFor="floatingInputDescription">Description (max-length 50)</label>
                            </div>
                        <button className="btn btn-primary">Submit!</button>
                    </form>
                </Loading>
            </div>
        </div>
    );
};

export default NewTicketInput;
