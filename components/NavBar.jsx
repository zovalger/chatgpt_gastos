import Image from "next/image";
import styles from "./NavBar.module.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";

export default function NavBar() {
	const nameApp = "app de gastos";

	return (
		<Navbar
			bg="primary"
			variant="dark"
			expand={"lg"}
			className={styles.container}
		>
			<Container fluid>
				<Link href="/" className="navbar-brand">
					{/* <Image
						className={styles.logo + " d-inline-block align-top"}
						src="/GoThere-black.svg"
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
							<Link href="/" className="nav-link">
								Home
							</Link>

							<Link href="/summary" className="nav-link">
								Summary
							</Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}
