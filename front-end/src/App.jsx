import { useEffect, useState } from 'react';
import './App.css';
import { useApi } from './services/api';
import SearchBar from './components/SearchBar';
import TableData from './components/TableData';
import CreateMenu from './components/CreateMenu';

function App() {
  const [listaContatos, setListaContatos] = useState()
  const [contatoPesquisa, setContatoPesquisa] = useState()
  const [showMenu, setShowMenu] = useState(false)
  const [search, setSearch] = useState('')

  const api = useApi()

  const handleGetContatos = async () => {
    const data = await api.getContatosList()
    setListaContatos(data)
  }

  const handleDelete = async (id) => {
    await api.deleteContato(id)
    handleGetContatos()
  }

  const handleSearch = async (nome) => {
    const data = await api.getContatoByNome(nome)
    if(data){
      setListaContatos([data])
    }
  }

  useEffect(() => {
    if(search){
      handleSearch(search)
    }else{
      handleGetContatos()
    }
  }, [showMenu, search])

  return (
    <div className="App">
      <header className="cabecalho">
        Agenda de Contatos by Guilherme Helton
      </header>

      <div className='nav-block'>
        <SearchBar value={search} onChange={e => setSearch(e)}/>
        <button onClick={() => setShowMenu(true)}>Novo Contato</button>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaContatos && listaContatos.map((contato) => (
            <tr key={contato.id}>
              <TableData
                id={contato.id}
                nome={contato.nome}
                email={contato.email}
                telefone={contato.telefone}
                handleDelete={handleDelete}/>
            </tr>
          ))}
          
          {contatoPesquisa &&
            <tr key={contatoPesquisa.id}>
              <TableData
                id={contatoPesquisa.id}
                nome={contatoPesquisa.nome}
                email={contatoPesquisa.email}
                telefone={contatoPesquisa.telefone}
                handleDelete={handleDelete}/>
            </tr>}
        </tbody>
      </table>

      {showMenu &&
        <CreateMenu
          setShowMenu={setShowMenu}/>
      }      
    </div>
  );
}

export default App;
