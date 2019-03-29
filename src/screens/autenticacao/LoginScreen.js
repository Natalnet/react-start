/*
 * @Author: Marcus Dantas
 * @Date: 2019-01-27 12:11:20
 * @Last Modified by: Marcus Dantas
 * @Last Modified time: 2019-02-11 02:49:17
 */

import React, { Component } from "react";

import TemplateAutenticacao from "components/templates/AutenticacaoTemplate";

import axios from "axios";

import variables from "config/variables";


export default class LoginScreen extends Component {
	getBody = () => {
		return {
			email: this.email.value,
			senha: this.senha.value
		};
	};

	handleSubmit = async event => {
		event.preventDefault();

		const body = this.getBody();

		let request = await axios.put(
			`${variables.host}/publico/autenticacao/login`,
			body
		);

		if (request !== undefined) {
			this.props.history.push("/sistema/home");
		}
	};

	componentDidMount() {
		document.title =
			"Realizar login - Conselho Nacional de Secretários de Educação";
	}

	render() {
		return (
			<TemplateAutenticacao>
				Teste de Login
			</TemplateAutenticacao>
		);
	}
}