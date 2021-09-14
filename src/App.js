import './App.css';

import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">例 : フォーム</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">お名前:</label>
              <input
                type="text"
                className={`form-control ${errors.name && 'invalid'}`}
                {...register('name', { required: 'お名前が必要です。' })}
                onKeyUp={() => {
                  trigger('name');
                }}
              />
              {errors.name && <small className="text-danger">{errors.name.message}</small>}
            </div>
            <div className="form-group">
              <label className="col-form-label">Age:</label>
              <input
                type="text"
                className={`form-control ${errors.age && 'invalid'}`}
                {...register('age', {
                  required: '年齢が必要です。',
                  min: {
                    value: 13,
                    message: '最低年齢は13歳です。',
                  },
                  max: {
                    value: 135,
                    message: '最高年齢は135歳です。',
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: '数字のみを入力します。',
                  },
                })}
                onKeyUp={() => {
                  trigger('age');
                }}
              />
              {errors.age && <small className="text-danger">{errors.age.message}</small>}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && 'invalid'}`}
                {...register('email', {
                  required: '電子メールアドレスは必須です。',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '無効な電子メールアドレスです。',
                  },
                })}
                onKeyUp={() => {
                  trigger('email');
                }}
              />
              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>
            <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                className={`form-control ${errors.phone && 'invalid'}`}
                {...register('phone', {
                  required: '電話番号は必須です。',
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: '無効な電話番号です。',
                  },
                })}
                onKeyUp={() => {
                  trigger('phone');
                }}
              />
              {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
            </div>
            <div className="form-group">
              <label className="col-form-label">Message:</label>
              <textarea
                className={`form-control ${errors.message && 'invalid'}`}
                {...register('message', {
                  required: 'メッセージは必須です。',
                  minLength: {
                    value: 10,
                    message: '最低限必要な長さは10文字です。',
                  },
                  maxLength: {
                    value: 50,
                    message: '最大50文字までの長さです。',
                  },
                })}
                onKeyUp={() => {
                  trigger('message');
                }}
              ></textarea>
              {errors.message && <small className="text-danger">{errors.message.message}</small>}
            </div>
            <input type="submit" className="btn btn-primary my-3" value="メッセージを送る" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
