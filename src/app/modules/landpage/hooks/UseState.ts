import { useState } from "react";

export default function Header__hooks() {
    const [isOpen, setOpen] = useState(false);


    return {
        isOpen,
        setOpen
    };

}