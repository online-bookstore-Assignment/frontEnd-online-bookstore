// app/(modal)/detail/page.tsx
import SkeletonModal from "@/components/skeleton/modal";
import { Suspense } from "react";
import DetailFetchContainer from "./components/DetailFetchContainer";

interface DetailModalPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const DetailModalPage = async ({ searchParams }: DetailModalPageProps) => {
  const { modal } = await searchParams;

  if (!modal || typeof modal !== "string") {
    return null;
  }

  return (
    <Suspense fallback={<SkeletonModal />}>
      <DetailFetchContainer modal={modal} />
    </Suspense>
  );
};

export default DetailModalPage;
