import { useActionState } from "react";
import './App.css'

function App() {
  const [data, submitAction, isPending] = useActionState(
    async (previousState: string, formData: FormData) => {
      const name = formData.get('name') as string
      const greet = await greetName(name);

      await new Promise((resolve) => setTimeout(() => {
        resolve("times up...")
      }, 1000))

      return greet
    },
    "Enter you name",
  );


  function greetName(name: string): string {
    return `Hi ${name}`
  }


  return (
    <form action={submitAction}>
      <input type="text" name='name' />
      <button>{isPending ? "Loading..." : "Submit"}</button>

      <p>{data}</p>
    </form>
  )
}

export default App
