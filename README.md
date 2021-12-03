# STAR WARS

## Link: http://kor-starwars.surge.sh/

## Considerações iniciais

Foi um projeto bacana de desenvolver, nele tive contato com as novas versões do react-router-dom, material-ui além de conhecer o fantástico mui-datatables.

### Instruções para o projeto

Utilize este comando em sua pasta de projetos: 

##### git clone https://github.com/AdrianAmerico/star-wars.git

##### cd star-wars

##### npm install

Após tudo isso, utilize o **npm run start**

### Requisitos Obrigatórios

- [x] Desenvolver interface de usuário utilizando React.JS
- [x] Utilização de Context API para gerenciamento dos dados de listas e dados individuais dos
personagens
- [x] Utilizar o componente MUI-Datatables - https://github.com/gregnb/mui-datatables
- [x] Disponibilizar documentação o suficiente para a execução do projeto no README

## Requisitos Opicionais

- [ ] Paginar as requisições e o componente de tabelas
- [x] MaterialUI ou Bootstrap como framework principal de estilização
- [x] Styled Components
- [ ] Utilizar Formik para os formulários
- [ ] Busque imagens e associe a cada um dos filmes

## O que Funciona

**Pagina principal**
- Nesta página, há uma lista de todas as tabelas disponíveis.

**Página de personagens**
- Nesta página, há uma lista de personagens e suas informações, e ao clicar será encaminhado para uma lista de informações sobre filmes que o personagem em questão participou.

**Página de detalhes do personagem**
- exibe detalhes de filmes.

## Problemas encontrados

Com a atualização de bibliotecas utilizadas no projeto, a forma que algumas coisas funcionavam foram alteradas e nem todas consegui deixar funcionando do jeito que queria, como os exemplos abaixo:

**Rota customizada**
- Com essa rota, cada um dos componentes dentro dela iria acompanhar com o Header mas nessa versão retorna erro e não é funcional, deixando assim as páginas com repetições que seriam desnecessárias caso isso fosse corrigido.

**MUI**
- Na versão 5, foi alterado a forma onde era estilizado e mesmo lendo sobre como agora é feito, continua sendo confuso e utilizei outros meios para estilização dos componentes dessa lib

**react-router-dom**
- A nova forma de utilizar hooks como o useHistory e useParams foi alterado, mas consegui corrigir este problema.

## Considerações finais 

Mesmo design não sendo o meu forte, o design do site ficou bonito e as funcionalidades ficaram como queria e acredito que agora será bem mais rápido fazer novas implementações como naves e veiculos, alem disso, me aprimorei com o uso do atomic design.

## Imagens

