FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 5010

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["SongsAPI.csproj", "./"]
RUN dotnet restore "SongsAPI.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "SongsAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SongsAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SongsAPI.dll"]
