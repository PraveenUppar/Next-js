// app/components/SubmitButton.tsx
"use server";

export async function submitComment(formData: FormData) {
  const comment = formData.get("comment") as string;

  // Server-side validation
  if (!comment || comment.length < 3) {
    return { error: "Comment must be at least 3 characters" };
  }

  // Save to database (example)
  console.log("Saving comment:", comment);

  return { success: true, message: "Comment submitted!" };
}

// app/components/CommentForm.tsx
// ("use client");

// import { submitComment } from "./SubmitButton";

// export default function CommentForm() {
//   return (
//     <form action={submitComment}>
//       <textarea name="comment" placeholder="Write a comment..." required />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
