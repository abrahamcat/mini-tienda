import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  private db: IDBDatabase | null = null;

  constructor() {
    this.initDB();
  }

  private initDB(): void {
    const request = indexedDB.open('MiniMercadoDB', 1);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains('Usuario')) {
        const store = db.createObjectStore('Usuario', { keyPath: 'id', autoIncrement: true });
        store.createIndex('email', 'email', { unique: true });
      }

      if (!db.objectStoreNames.contains('Producto')) {
        const store = db.createObjectStore('Producto', { keyPath: 'id', autoIncrement: true });
        store.createIndex('nombre', 'nombre', { unique: false });
      }

      if (!db.objectStoreNames.contains('Pedido')) {
        const store = db.createObjectStore('Pedido', { keyPath: 'id', autoIncrement: true });
        store.createIndex('usuarioId', 'usuarioId', { unique: false });
      }
    };

    request.onsuccess = (event: any) => {
      this.db = event.target.result;
      console.log('Base de datos lista');
      this.insertarProductosIniciales();
    };

    request.onerror = (event) => {
      console.error('Error al abrir IndexedDB', event);
    };
  }

  private insertarProductosIniciales(): void {
    if (!this.db) return;

    const productos = [
      { nombre: 'Producto 1', precio: 10 },
      { nombre: 'Producto 2', precio: 20 },
      { nombre: 'Producto 3', precio: 30 },
      { nombre: 'Producto 4', precio: 40 },
      { nombre: 'Producto 5', precio: 50 },
    ];

    const tx = this.db.transaction('Producto', 'readwrite');
    const store = tx.objectStore('Producto');

    productos.forEach(p => store.add(p));
  }

}
