const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer data-testid="footer" className="py-1">
      <p className="text-center mt-1">
        Ecommerce Amazon - {year}, All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
