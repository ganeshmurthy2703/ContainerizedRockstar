FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 5004
ENV ASPNETCORE_URLS=http://*:5004

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["MVC_Frontend.csproj", "./"]
RUN dotnet restore "MVC_Frontend.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "MVC_Frontend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MVC_Frontend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MVC_Frontend.dll"]
