import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [enquiryReason, setEnquiryReason] = useState("");

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submited");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({ 
                    fullName,
                    email,
                    enquiry,
                    enquiryReason,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setFullName("");
                setEmail("");
                setEnquiry("");
                setEnquiryReason("");

                toast.success("Form submitted successfully");
            } else {
                toast.error("Failed to submit form");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id="contact-container">
            <span style={contactTitle}>Get in Touch</span>
            
            <ToastContainer position="top-right" theme="dark" autoClose={3000} />

            <form id="contact-section" onSubmit={submitHandler}>
                <div className="contact-form-content">
                    <span style={{ width: "20%" }}>Full Name:</span>
                    <input
                        type="text"
                        className="contact-input"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Input Name"
                        required
                        minLength={4}
                        maxLength={20}
                        pattern="[A-Za-z\s'-]+"
                    />
                </div>

                <div className="contact-form-content">
                    <span style={{ width: "20%" }}>Email:</span>
                    <input
                        type="email"
                        className="contact-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Input Email"
                        required
                    />
                </div>

                <div className="contact-form-content">
                    <span style={{ width: "20%" }}>Enquiry:</span>
                    <input
                        type="text"
                        className="contact-input"
                        value={enquiry}
                        onChange={(e) => setEnquiry(e.target.value)}
                        placeholder="Input Enquiry"
                        required
                    />
                </div>

                <div id="contact-form-enquiry-reason">
                    <span style={enquiryReasonTitle}>Reason for Enquiry (optional):</span>
                    <textarea
                        style={enquiryReasonDesc}
                        value={enquiryReason}
                        onChange={(e) => setEnquiryReason(e.target.value)}
                    />
                </div>

                <button type="submit" id="contact-form-sumbit">Submit</button>
            </form>
        </div>
    );
};

const contactTitle = {
    fontFamily: "Change One",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#00ff4c",
};

const enquiryReasonTitle = {
    fontWeight: "bold",
    fontSize: "20px",
    borderBottom: "1px solid #fff"
};

const enquiryReasonDesc = {
    height: "100%",
    width: "101.5%",
    fontSize: "15px",
    color: "white",

    background: "none",
    border: "2px solid #ffffff75",
    borderRadius: "5px",
    outline: "none",

    resize: "none" as const,
    padding: "10px"
};

export default Contact;