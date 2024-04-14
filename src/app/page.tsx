import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getApp, getApps } from "firebase-admin/app";
import { firestore } from "firebase-admin";
import { customInitApp } from "@/firebase-admin";

customInitApp();

export default async function Home() {
  const db = firestore(getApp());
  const books = await db.collection("books").get();
  const bookData = books.docs.map((book) => book.data());
  console.log(bookData);
  return (
    <main>
      <form
        action={async (formData) => {
          "use server";
          const db = firestore();

          const books = db.collection("books");
          books.add({
            title: formData.get("title"),
            author: formData.get("author"),
          });
        }}
      >
        <Input name="title" />
        <Input name="author" />
        <Button type="submit">Hello World</Button>
      </form>
      <ul>
        {books.docs.map((book) => (
          <li key={book.id}>
            <h2>{book.data().title}</h2>
            <p>{book.data().author}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
