class BookInventoriesController < ApplicationController
  before_action :set_book_inventory, only: %i[ show update destroy ]
  before_action :authenticate_user
  

  # GET /book_inventories
  def index
    @book_inventories = BookInventory.all

    render json: @book_inventories
  end

  # GET /book_inventories/1
  def show
    render json: @book_inventory
  end

  # POST /book_inventories
  def create
    @book_inventory = BookInventory.new(book_inventory_params)

    if @book_inventory.save
      render json: @book_inventory, status: :created, location: @book_inventory
    else
      render json: @book_inventory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /book_inventories/1
  def update
    if @book_inventory.update(book_inventory_params)
      render json: @book_inventory
    else
      render json: @book_inventory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /book_inventories/1
  def destroy
    @book_inventory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book_inventory
      @book_inventory = BookInventory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_inventory_params
      params.fetch(:book_inventory, {})
    end
end
