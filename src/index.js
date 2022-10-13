const openModal = () => {
   const modal = document.getElementById('modal');
   modal.classList.add('active')
}

const closeModal = () => {
   modal.classList.remove('active');
}

//localstorage
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];

const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

//CRUD
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

const readClient = () => getLocalStorage();

const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

// interação com o layout
const isValidFields = () => document.getElementById('form').reportValidity();

const saveClient = () => {
  if(isValidFields()) {
    const client = {
      name: document.getElementById('name').value,
      email: document.getElementById('name').value,
      birthDate: document.getElementById('birthDate').value
    }
    console.log(client)
    createClient(client)
    closeModal()
  }

}



//events
const registerClientButton = document.getElementById('registerClient');
registerClientButton.addEventListener('click', openModal);

const closeModalButton = document.getElementById('closeModal');
closeModalButton.addEventListener('click', closeModal);

const saveClientButton = document.getElementById('saveClient');
saveClientButton.addEventListener('click', saveClient)