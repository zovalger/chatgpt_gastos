import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "./NavBar.module.scss";

export default function NavBar({ name }) {
	const nameApp = name || "name page";

	return (
		<Navbar
			bg="primary"
			variant="dark"
			expand={"lg"}
			className={styles.container + " sticky-top"}
		>
			<Container fluid>
				<Link href="/" className="navbar-brand">
					{/* <Image
						className={styles.logo + " d-inline-block align-top"}
						src="/IMG_20230216_170039_985.jpg"
						alt="logo"
						width={30}
						height={30}
					/> */}
					{nameApp}
				</Link>

				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-${"lg"}`}
					aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
							{nameApp}
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{/* <Link href="/" className="nav-link">
								Home
							</Link> */}

							<Link href="/" className="nav-link">
								Home
							</Link>
							<Link href="/new-transaction" className="nav-link">
								Add transaction
							</Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}
