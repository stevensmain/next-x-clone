"use client";
import { useRef } from "react";

import { createPost } from "@/app/actions";

export default function ComposePostForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await createPost(formData);
        formRef.current?.reset();
      }}
      className="flex flex-1 flex-col gap-y-1"
    >
      <textarea
        name="content"
        rows={2}
        className="w-full bg-black text-lg placeholder-gray-500 outline-none"
        placeholder="What's on your mind?"
      ></textarea>
      <button
        type="submit"
        className="rounded-full px-5 py-2 bg-sky-600 font-bold text-sm self-end"
      >
        Post
      </button>
    </form>
  );
}
