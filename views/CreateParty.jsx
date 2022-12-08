const React = require('react');
const Layout = require('./Layout');

function CreateParty({user}) {
return (
<Layout user = {user}>
  {user?(
  <div className="wrapper">
    <div className='wrapperCreate'>
      <h2>Тусовка</h2>
      <form action="/createParty/addNew" method='POST'>
        <div className='wrapperParty'>
          <div className="formForInput">
            <label className="form-label">Название</label>
            <input type="text" name="title" className="form-control" required />
          </div>
          <div className="formForInput">
            <div className='divZagolovok'>
              <label className="form-label">Инвайт-код*</label>
              <button data-generateCode='generateCode' className='btn btn-outline' style={{border:'none'}}>сгенерировать</button>
            </div>
            <input type="text" name="code" className="form-control inputCode" required />
          </div>
          <div className="formForInput">
            <label className="form-label">Дата</label>
            <input type="date" name="date" className="form-control" required />
          </div>
          <div className="formForInput">
            <label className="form-label">Дресс-код</label>
            <input type="text" name="clothes" className="form-control" required />
          </div>
          <div className="formForInput">
            <label className="form-label">Геопозиция</label>
            <input type="text" name="place" className="form-control" placeholder='54.759192, 56.017387' required />
          </div>
          <div className="formForInput">
            <label className="form-label">Жми скорей</label>
            <button type="submit" className="btn btn-outline">Создать</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  ):
  (
  <div className='divZagolovok'>
    <h1 className='zagolovok'>Вы еще пока не можете создать тусовку... <a href="/auth/signup">зарегестрируйся</a> или <a
        href="/auth/signin">авторизуйся</a>.</h1>
  </div>
  )}
</Layout>
);
}

module.exports = CreateParty;