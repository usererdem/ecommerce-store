import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("d72c8979-afcb-40f4-8807-9b37fb127082");
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
