
export const dynamic = "force-dynamic";  // build time  static page, but we want to make it dynamic

export default  async function About() {

  await new Promise((resolve) => setTimeout(resolve, 4000));

  // throw new Error("Failed to load about page.");
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of the blog site.</p>
    </div>
  );
}