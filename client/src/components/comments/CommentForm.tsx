// Desc: This file contains the comment form component

import { useState } from "react";

interface CommentFormProps {
  btnLabel: string;
  formSubmitHandler: (value: string ) => void;
}

export default function CommentForm({btnLabel, formSubmitHandler}: CommentFormProps) {
  const [value, setValue] = useState("");

  const submiHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };

  return (
    <form onSubmit={submiHandler}>
      <div className="flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
          className="w-full focus:outline-none "
          placeholder="Leave your comment here..."
          rows={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="px-6 rounded-lg bg-primary text-white font-semibold py-2.5 mt-2 ">{btnLabel}</button>
      </div>
    </form>
  );
}