import { useDispatch, useSelector } from 'react-redux';

export default function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;

  return (
    <div className="font-semiboldnpm hidden text-sm md:block">{username}</div>
  );
}
