export class LoginService {
    constructor() {}
  
    /**
     * Busca uma lista de pacientes.
     * @returns
     */
    async listUser() {
      const url = `http://localhost:3000/user`;
      const options = {
        method: 'GET',
      };
  
      try {
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error("Pesquisa não encontrada")
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        throw error; // Propaga o erro para ser tratado externamente
      }
    }
  
    /**
     * Inserção do paciente com Ajax.
     * @param {*} data
     * @returns
     */
    async insertUserWithFetch(data) {
      const url = `http://localhost:3000/user`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
  
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        return response;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  
    /**
     * Inserção do paciente com Ajax via JQuery
     * @param {*} data
     * @returns
     */
    insertPatientWithJqueryAjax(data) {
      const url = `http://localhost:3000/user`;
  
      try {
        const response = $.ajax({
          url: url,
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(data),
          dataType: 'json',
        });
  
        return response;
      } catch (error) {
        console.error('Erro ao inserir paciente:', error);
        return null;
      }
    }
  }