export function LogOutButton({ handleLogout }) {
  return (
    <form action={handleLogout} className="inline">
      <button className="bg-pink-300 text-black px-3 py-2 rounded">
        Login
      </button>
    </form>
  );
}
