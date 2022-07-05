import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alunos from './pages/Alunos/Alunos';
import CadastroAluno from './pages/Cadastro/CadastroAluno';
import Caixa from './pages/Caixa/Caixa';
import Home from './pages/Home/index';
import Questionario from './pages/Questionario/Questionario';
import Recebimento from './pages/Recebimento/Recebimento';
import Vendas from './pages/Vendas/Vendas';


function Routes() {



    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' exact component={Home} />
                <Route path='/home/cadastroAluno' component={CadastroAluno} />
                <Route path='/home/questionario' component={Questionario} />
                <Route path='/home/caixa' component={Caixa} />
                <Route path='/home/alunos' component={Alunos} />
                <Route path='/home/vendas' component={Vendas} />
                <Route path='/home/recebimento' component={Recebimento} />
            </Switch>
        </Router>
    )
}

export default Routes