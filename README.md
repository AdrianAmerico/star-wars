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
- Na versão 5, foi alterado a forma onde era estilizado e mesmo lendo sobre como agora é feito, continua sendo confuso e utilizei outros meios para estilização dos componentes dessa lib.

**react-router-dom**
- A nova forma de utilizar hooks como o useHistory e useParams foi alterado, mas consegui corrigir este problema.

## Considerações finais 

Mesmo design não sendo o meu forte, o design do site ficou bonito e as funcionalidades ficaram como queria e acredito que agora será bem mais rápido fazer novas implementações como naves e veiculos, alem disso, me aprimorei com o uso do atomic design.

## Imagens

#### Página Principal

**Desktop**

![Captura de tela de 2021-12-03 12-42-20](https://user-images.githubusercontent.com/73081422/144631126-106d0d41-5d32-441b-ac3a-dd7e5090098f.png)

**Mobile**

![Captura de tela de 2021-12-03 12-43-25](https://user-images.githubusercontent.com/73081422/144631164-1c349a37-ccdc-442f-b4c5-c49eeaf344a6.png)

#### Página de Personagens

**Desktop**

![Captura de tela de 2021-12-03 12-48-03](https://user-images.githubusercontent.com/73081422/144631413-f2b82707-2c23-404a-846f-3e0c169e0ade.png)

**Mobile**

![Captura de tela de 2021-12-03 12-43-38](https://user-images.githubusercontent.com/73081422/144631302-24a7fc0d-0a64-4381-8217-d2cc7eeb2750.png)

#### Página Detalhes

**Desktop**

![Captura de tela de 2021-12-03 12-42-36](https://user-images.githubusercontent.com/73081422/144631246-b93ce2a7-5e72-47d0-8d11-a0c3826c10b1.png)


**Mobile**

![Captura de tela de 2021-12-03 12-43-54](https://user-images.githubusercontent.com/73081422/144631340-d2ddc269-b4e4-4c10-ac8c-a38df14fd99a.png)

#### Header

**Desktop**

![Captura de tela de 2021-12-03 12-48-44](https://user-images.githubusercontent.com/73081422/144631539-55eefa36-e697-48fc-9474-3686ac19df2b.png)

![headerdesktop](https://user-images.githubusercontent.com/73081422/144631905-357050f7-00be-404e-8297-aab133d4b6c1.gif)


**Mobile**

![Captura de tela de 2021-12-03 12-51-49](https://user-images.githubusercontent.com/73081422/144632036-fc6da6ee-c5aa-4365-9a06-e7873b869cf3.png)

![headermobile](https://user-images.githubusercontent.com/73081422/144631931-8ec7c213-4a84-4756-b956-981f3ff07599.gif)

