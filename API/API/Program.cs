using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();

var app = builder.Build();

app.MapGet("/", () => "joallyfer");

// GET: /api/chamado/listar
app.MapGet("/api/chamado/listar",
    ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Chamados.Any())
    {
        return Results.Ok(ctx.Chamados.ToList());
    }
    return Results.NotFound("Nenhum chamado encontrado");
});

// POST: /api/chamado/cadastrar
app.MapPost("/api/chamado/cadastrar",
    ([FromServices] AppDataContext ctx,
     [FromBody] Chamado chamado) =>
{
    // Todo chamado novo deve iniciar com status "Aberto"
    chamado.Status = "Aberto";
    ctx.Chamados.Add(chamado);
    ctx.SaveChanges();
    return Results.Created($"/api/chamado/buscar/{chamado.ChamadoId}", chamado);
});

// PATCH: /api/chamado/alterar
app.MapPatch("/api/chamado/alterar",
    ([FromServices] AppDataContext ctx,
     [FromBody] Chamado chamado) =>
{
    // Busca pelo identificador
    var encontrado = ctx.Chamados.Find(chamado.ChamadoId);
    if (encontrado == null)
    {
        return Results.NotFound("Chamado não encontrado");
    }

    if (encontrado.Status == "Aberto")
    {
        encontrado.Status = "Em atendimento";
    }
    else if (encontrado.Status == "Em atendimento")
    {
        encontrado.Status = "Resolvido";
    }

    ctx.Chamados.Update(encontrado);
    ctx.SaveChanges();
    return Results.Ok(encontrado);
});

// GET: /api/chamado/naoresolvido 
app.MapGet("/api/chamado/naoresolvido",
    ([FromServices] AppDataContext ctx) =>
{
    var lista = ctx.Chamados
        .Where(c => c.Status == "Aberto" || c.Status == "Em atendimento")
        .ToList();

    return Results.Ok(lista);
});

app.MapGet("/api/chamado/naoresolvidos",
    ([FromServices] AppDataContext ctx) =>
{
    var lista = ctx.Chamados
        .Where(c => c.Status == "Aberto" || c.Status == "Em atendimento")
        .ToList();

    return Results.Ok(lista);
});

// GET: /api/chamado/resolvidos
app.MapGet("/api/chamado/resolvidos",
    ([FromServices] AppDataContext ctx) =>
{
    var lista = ctx.Chamados
        .Where(c => c.Status == "Resolvido")
        .ToList();

    return Results.Ok(lista);
});

app.Run();
