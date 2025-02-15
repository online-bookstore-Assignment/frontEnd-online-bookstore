interface ArrowLeftProps {
  style: { strokeWidth: number };
}

const ArrowRight = ({ style }: ArrowLeftProps) => {
  return (
    <svg
      style={style}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="24px"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"></path>
    </svg>
  );
};

export default ArrowRight;
