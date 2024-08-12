type Props = { title: string };

export default function MenuTitle({ title }: Props) {
  return <p className="text-gray w-full border-b-2 border-graydarker/20 font-medium">{title}</p>;
}
