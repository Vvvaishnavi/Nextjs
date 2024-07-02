export default function ProductDetailLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        {children}
        <h2
        style={{
            backgroundColor:"lime",
            fontFamily:"monospace",
        }}>featured product</h2>
        </>
    );
}