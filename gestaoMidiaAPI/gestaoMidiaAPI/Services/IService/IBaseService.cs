using AngleSharp.Dom;
using FluentValidation;
using System;

namespace gestaoMidiaAPI.Services
{
    public interface IBaseService<TEntity> : IDisposable<TEntity> where TEntity : Entity
    {
        TEntity Add<TValidator>(TEntity entity) where TValidator : AbstractValidator<TEntity>;

        void Delete(TEntity entity);

        IEnumerable<TEntity> GetAll();

        TEntity GetById(Guid id);

        TEntity Update<TValidator>(TEntity entity) where TValidator : AbstractValidator<TEntity>;
    }
}
