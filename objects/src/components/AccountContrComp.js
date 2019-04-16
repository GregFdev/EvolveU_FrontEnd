import React, { Component } from 'react';
import Account from './Account.js';
import AccountComp from './AccountComp.js';
import './style_accounts.css';


class AccountContrComp extends Component {
	constructor () {
		super();

	}

	onClick = (e) => {
		

	};

	render() {
		return(
			<div className='container'>
				<div className='leftside'>
					<div className='upperleft'>


						<h2>
							Accounts General Info
						</h2>
					
					</div>

					<div className='lowerleft'>

						<h2>
							Account Listing Table
						</h2>

					</div>

					<div className='rightside'>

						<AccountComp />
						
					</div>

					

				</div>

			</div>


		)

	
};
};

export default AccountContrComp;

