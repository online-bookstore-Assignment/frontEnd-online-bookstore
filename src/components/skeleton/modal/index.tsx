import InputFilde from "@/components/InputFilde";

const SkeletonModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content relative">
        <button className="absolute bottom-5 right-5 bg-[rgb(53,54,56)] rounded-full text-white mt-2 py-1 w-1/3">
          나가기
        </button>
        <form className="flex gap-2 flex-col animate-pulse ">
          <InputFilde title="제목" name="title" />
          <InputFilde title="저자" name="author" />
          <InputFilde title="가격" name="price" pattern="^\d+$" />
          <InputFilde title="수량" name="ea" pattern="^\d+$" />
        </form>
        <button
          className="bg-[rgb(53,54,56)] rounded-full text-white mt-4 py-1 w-1/3"
          type="submit"
        >
          제출
        </button>
      </div>
    </div>
  );
};

export default SkeletonModal;
