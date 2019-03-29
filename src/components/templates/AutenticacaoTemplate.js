/*
 * @Author: Marcus Dantas
 * @Date: 2019-01-27 12:11:20
 * @Last Modified by: Marcus Dantas
 * @Last Modified time: 2019-02-03 22:00:20
 */

import React, { Component } from "react";

import Swal from 'sweetalert2';

import axios from "axios";

export default class TemplateAutenticacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erros: [],
      keyErros: 0
    };
  }
  componentDidMount() {
    document.title = "Template de login";

    axios.interceptors.response.use(null, error => {
      if (error.response !== undefined) {
        if (
          error.response.status === 500 ||
          error.response.status === 400 ||
          error.response.status === 404
        ) {
          const { erros } = error.response.data;

          let text = erros.map(erro => {
            return `${erro.msg}`.replace(".", "");
          });

          Swal.fire({
            type: "error",
            title: `Erro ${error.response.status}`,
            text: text,
            confirmButtonText: "Voltar para o sistema"
          });
        } else {
          return Promise.reject(error);
        }
      }
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div class="col-lg-6">
                    <div class="p-5">
                        {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
