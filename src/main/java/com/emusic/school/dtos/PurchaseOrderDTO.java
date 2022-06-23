package com.emusic.school.dtos;

import com.emusic.school.models.Merch;
import com.emusic.school.models.PurchaseOrder;
import com.emusic.school.models.Ticket;

public class PurchaseOrderDTO {

    private long id;
    private MerchDTO merch;

    public PurchaseOrderDTO() {
    }

    public PurchaseOrderDTO(PurchaseOrder purchaseOrder) {
        this.id = purchaseOrder.getId();
        this.merch = new MerchDTO(purchaseOrder.getMerch());
    }


    public long getId() {
        return id;
    }

    public MerchDTO getMerch() {
        return merch;
    }

    public void setMerch(MerchDTO merch) {
        this.merch = merch;
    }
}
