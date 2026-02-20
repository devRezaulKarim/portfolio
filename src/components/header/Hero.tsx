import Container from "../wrappers/Container";

export const Hero = () => {
  return (
    <div className="border-y">
      <Container>
        <div className="grid grid-cols-1 border-x md:grid-cols-2">
          <div className="border-r p-2">Content</div>
          <div className="p-2">image</div>
        </div>
      </Container>
    </div>
  );
};
