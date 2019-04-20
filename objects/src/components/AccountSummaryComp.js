// summary card for list

import React, { Component } from 'react';
// import Account from './Account.js';
import './style_accounts.css';

class AccountSummaryComp extends Component {
	constructor (props) {
		super(props);
		
		console.log(this.props.account);


	};

	onClickEdit = (e) => {
		console.log('btn target is ', e.target);

	};

	

	render() {
		return(
			
			<div className='accountSummary'>
									
				
				<ul className='list'>						
					<li>Account ID: {this.props.account.acctID}</li>
					<li>Account Name: {this.props.account.acctType}</li>
					<li>Account Balance $CDN: {this.props.account.balance}</li>
				</ul>
				

				<div>
						<button className='buttons' id='btnEdit' onClick={this.onClickEdit} >Edit Account</button>

				</div>
				
								
			</div>
			


		)
	}

}

export default AccountSummaryComp;

