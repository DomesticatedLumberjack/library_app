class CheckoutRecordsController < ApplicationController
  before_action :set_checkout_record, only: %i[ show update destroy ]

  # GET /checkout_records
  def index
    @checkout_records = CheckoutRecord.all

    render json: @checkout_records
  end

  # GET /checkout_records/1
  def show
    render json: @checkout_record
  end

  # POST /checkout_records
  def create
    @checkout_record = CheckoutRecord.new(checkout_record_params)

    if @checkout_record.save
      render json: @checkout_record, status: :created, location: @checkout_record
    else
      render json: @checkout_record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /checkout_records/1
  def update
    if @checkout_record.update(checkout_record_params)
      render json: @checkout_record
    else
      render json: @checkout_record.errors, status: :unprocessable_entity
    end
  end

  # DELETE /checkout_records/1
  def destroy
    @checkout_record.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_checkout_record
      @checkout_record = CheckoutRecord.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def checkout_record_params
      params.fetch(:checkout_record, {})
    end
end
