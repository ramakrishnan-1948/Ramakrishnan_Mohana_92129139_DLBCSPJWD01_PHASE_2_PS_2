import react, {useState, useEffect} from "react";
import {Redirect, useHistory} from "react-router-dom";

const Transact = () => {
	const [customers, setCustomers] = useState([]);
	const [sender_name, setSender] = useState("");
	const [receiver_name, setReceiver] = useState("");
	const [amount, setAmount] = useState(-1);
	const [sender_bal, setSenderBal] = useState();

	let history = useHistory();

	// var sender_name = "",
	//   sender_bal,name
	//   receiver_name = "";
	var sender_id, receiver_id, i;
	// var amount = -1;

	const getCustomers = async () => {
		try {
			const response = await fetch("/getcustomers");
			const jsonData = await response.json();

			setCustomers(jsonData);
		} catch (error) {
			console.log(error.message);
		}
	};

	const transactionHandler = async e => {
		e.preventDefault();

		try {
			console.log(sender_name, receiver_name, amount);
			if (sender_name == "") {
				window.alert("Select sender!");
				return;
			} else if (receiver_name == "") {
				window.alert("Select Receiver");
				return;
			} else if (amount == -1) {
				window.alert("Please enter amount to be transferred!");
				return;
			} else if (sender_bal < amount) {
				window.alert("Insufficient Funds!!");
				return;
			} else if (sender_name == receiver_name) {
				window.alert("Sender and Receiver Cannot be the same!!");
				return;
			}
			const body = {sender_name, receiver_name, amount};

			const response = await fetch("/transfer", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(body),
			});

			console.log(response);
			window.confirm("Transaction Successful!");
			getCustomers();

			history.push("/history");
		} catch (error) {
			console.log(error.message);
		}
	};

	const senderChangeHandler = e => {
		const sender_id = Number(e.target.value); // Convert to number if c_id is numeric
		for (let i = 0; i < customers.length; i++) {
			// Use dynamic array length instead of hardcoding 10
			if (!customers[i]) continue;

			console.log("cust 1=> ", customers[i]);

			if (customers[i].c_id === sender_id) {
				setSender(customers[i].name);
				setSenderBal(customers[i].balance);

				// Exit loop after finding the customer
				break;
			}
		}

		// Logs should go here after state updates
		console.log("Sender Name:", sender_name, "Sender Balance:", sender_bal);
	};

	const receiverChangeHandler = e => {
		const receiver_id = Number(e.target.value); // Convert to number if c_id is numeric

		for (let i = 0; i < customers.length; i++) {
			// Use dynamic array length
			if (!customers[i]) continue;

			console.log("cust 2=> ", customers[i]);

			if (customers[i].c_id === receiver_id) {
				setReceiver(customers[i].name);

				// Exit loop after finding the receiver
				break;
			}
		}

		// Log statement after loop
		console.log("Receiver Name:", receiver_name);
	};

	const amountChangeHandler = e => {
		setAmount(e.target.value);
	};

	useEffect(() => {
		getCustomers();
	}, []);

	return (
		<div className='Transact'>
			<div className='container transfer'>
				<span className='title'>Transfer Form</span>
				<br />
				<br />
				<form action=''>
					<div>
						Sender: <br />
						<select
							name='sender'
							id='sender'
							onChange={senderChangeHandler}
						>
							<option selected disabled>
								Choose Sender
							</option>
							{customers.map(customer => (
								<option value={customer.c_id}>
									{customer.name} [Rs.{customer.balance}]
								</option>
							))}
						</select>
					</div>
					<br />
					<div>
						Receiver: <br />
						<select
							name='receiver'
							id='receiver'
							onChange={receiverChangeHandler}
						>
							<option selected disabled>
								Choose Sender
							</option>
							{customers.map(customer => (
								<option value={customer.c_id}>
									{customer.name} [Rs.{customer.balance}]
								</option>
							))}
						</select>
					</div>
					<br />
					<div>
						Amount: <br />
						<input
							type='text'
							placeholder='Rs.'
							onChange={amountChangeHandler}
						/>
					</div>
					<div className='transfer-btn'>
						<button onClick={transactionHandler}>Transfer</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Transact;
